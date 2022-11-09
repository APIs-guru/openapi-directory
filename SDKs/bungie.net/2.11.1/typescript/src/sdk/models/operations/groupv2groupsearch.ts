import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GroupSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
