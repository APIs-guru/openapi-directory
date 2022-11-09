import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
