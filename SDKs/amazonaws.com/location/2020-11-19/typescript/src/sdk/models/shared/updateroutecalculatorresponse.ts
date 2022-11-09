import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRouteCalculatorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculatorArn" })
  calculatorArn: string;

  @Metadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
