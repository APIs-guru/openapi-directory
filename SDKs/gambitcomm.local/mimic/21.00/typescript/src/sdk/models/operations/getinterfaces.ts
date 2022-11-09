import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInterfacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInterfaces200ApplicationJsonObject?: Map<string, number>;
}
