import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchParametersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=example" })
  example: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=paramname" })
  paramname: string;

  @Metadata({ data: "json, name=valuelist" })
  valuelist?: any;
}
