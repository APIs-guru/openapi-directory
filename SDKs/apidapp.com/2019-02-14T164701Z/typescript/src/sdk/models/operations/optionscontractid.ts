import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsContractIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsContractIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsContractIdPathParams;
}


export class OptionsContractIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
