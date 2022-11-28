import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { StateMachineStatusEnum } from "./statemachinestatusenum";
import { TracingConfiguration } from "./tracingconfiguration";
import { StateMachineTypeEnum } from "./statemachinetypeenum";



export class DescribeStateMachineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StateMachineStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tracingConfiguration" })
  tracingConfiguration?: TracingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: StateMachineTypeEnum;
}
