import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionEventInvokeConfig } from "./functioneventinvokeconfig";



export class ListFunctionEventInvokeConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FunctionEventInvokeConfigs", elemType: FunctionEventInvokeConfig })
  functionEventInvokeConfigs?: FunctionEventInvokeConfig[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
