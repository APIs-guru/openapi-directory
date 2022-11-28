import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activation } from "./activation";



export class DescribeActivationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationList", elemType: Activation })
  activationList?: Activation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
