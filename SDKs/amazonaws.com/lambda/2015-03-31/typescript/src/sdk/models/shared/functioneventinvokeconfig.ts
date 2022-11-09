import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationConfig } from "./destinationconfig";


export class FunctionEventInvokeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: DestinationConfig;

  @Metadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}
