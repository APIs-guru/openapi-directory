import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchBinIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchBinIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchBinIdPathParams;
}


export class PatchBinIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStatus?: any;
}
