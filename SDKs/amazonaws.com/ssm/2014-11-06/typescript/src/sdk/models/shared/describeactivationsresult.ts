import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activation } from "./activation";


export class DescribeActivationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationList", elemType: shared.Activation })
  activationList?: Activation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
