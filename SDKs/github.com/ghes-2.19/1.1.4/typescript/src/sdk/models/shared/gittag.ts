import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Verification } from "./verification";


export class GitTagObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class GitTagTagger extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// GitTag
/** 
 * Metadata for a Git tag
**/
export class GitTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=object" })
  object: GitTagObject;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=tag" })
  tag: string;

  @Metadata({ data: "json, name=tagger" })
  tagger: GitTagTagger;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=verification" })
  verification?: Verification;
}
