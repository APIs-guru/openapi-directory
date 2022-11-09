import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Member } from "./member";


export class Members extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=members", elemType: shared.Member })
  members?: Member[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
