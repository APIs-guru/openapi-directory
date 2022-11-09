import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFunctionsByCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FunctionArns" })
  functionArns?: string[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
