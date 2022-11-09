import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RunnerLabelsTypeEnum {
    ReadOnly = "read-only"
,    Custom = "custom"
}


export class RunnerLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: RunnerLabelsTypeEnum;
}


// Runner
/** 
 * A self hosted runner
**/
export class Runner extends SpeakeasyBase {
  @Metadata({ data: "json, name=busy" })
  busy: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels", elemType: shared.RunnerLabels })
  labels: RunnerLabels[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=os" })
  os: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
