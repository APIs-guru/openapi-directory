import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionEventInvokeConfig } from "./functioneventinvokeconfig";


export class ListFunctionEventInvokeConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FunctionEventInvokeConfigs", elemType: shared.FunctionEventInvokeConfig })
  functionEventInvokeConfigs?: FunctionEventInvokeConfig[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
