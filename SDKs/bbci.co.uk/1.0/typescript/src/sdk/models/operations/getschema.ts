import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
