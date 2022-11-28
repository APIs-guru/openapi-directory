import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";



export class FunctionEventInvokeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: DestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}
