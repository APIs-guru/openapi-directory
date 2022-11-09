import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  meModel?: shared.MeModel;

  @Metadata()
  statusCode: number;
}
