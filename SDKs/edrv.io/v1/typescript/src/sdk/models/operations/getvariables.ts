import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVariablesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVariablesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVariablesPathParams;
}


export class GetVariablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
