import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=example" })
  example: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=paramname" })
  paramname: string;

  @SpeakeasyMetadata({ data: "json, name=valuelist" })
  valuelist?: any;
}
