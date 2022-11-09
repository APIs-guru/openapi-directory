import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example110?: shared.Example110;

  @Metadata()
  statusCode: number;
}
