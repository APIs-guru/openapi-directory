import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersVersionResponse extends SpeakeasyBase {
  @Metadata()
  containersVersionGetInfo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
