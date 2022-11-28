import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRouteCalculatorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculatorArn" })
  calculatorArn: string;

  @SpeakeasyMetadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
