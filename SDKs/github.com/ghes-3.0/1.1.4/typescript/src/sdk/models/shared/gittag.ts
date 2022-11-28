import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";



export class GitTagObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class GitTagTagger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// GitTag
/** 
 * Metadata for a Git tag
**/
export class GitTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: GitTagObject;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "json, name=tagger" })
  tagger: GitTagTagger;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: Verification;
}
