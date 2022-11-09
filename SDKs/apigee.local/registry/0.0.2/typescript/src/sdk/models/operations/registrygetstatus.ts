import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  status?: any;

  @Metadata()
  statusCode: number;
}
