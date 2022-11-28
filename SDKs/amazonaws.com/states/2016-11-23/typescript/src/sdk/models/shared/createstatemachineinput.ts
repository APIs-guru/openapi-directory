import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { Tag } from "./tag";
import { TracingConfiguration } from "./tracingconfiguration";
import { StateMachineTypeEnum } from "./statemachinetypeenum";



export class CreateStateMachineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=tracingConfiguration" })
  tracingConfiguration?: TracingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: StateMachineTypeEnum;
}
