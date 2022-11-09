import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsContractIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsContractIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsContractIdPathParams;
}


export class OptionsContractIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
