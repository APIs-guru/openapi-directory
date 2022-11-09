import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBinIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBinIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBinIdPathParams;
}


export class GetBinIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  getBinId200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
