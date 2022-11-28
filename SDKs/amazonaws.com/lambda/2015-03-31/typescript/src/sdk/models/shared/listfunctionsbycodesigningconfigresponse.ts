import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFunctionsByCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FunctionArns" })
  functionArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
