import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";



export class Members extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: Member })
  members?: Member[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
