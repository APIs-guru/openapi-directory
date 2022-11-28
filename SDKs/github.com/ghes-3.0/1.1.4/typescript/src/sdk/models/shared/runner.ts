import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RunnerLabelsTypeEnum {
    ReadOnly = "read-only",
    Custom = "custom"
}


export class RunnerLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RunnerLabelsTypeEnum;
}


// Runner
/** 
 * A self hosted runner
**/
export class Runner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=busy" })
  busy: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: RunnerLabels })
  labels: RunnerLabels[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
