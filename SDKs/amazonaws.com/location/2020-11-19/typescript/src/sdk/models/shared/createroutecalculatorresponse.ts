import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRouteCalculatorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculatorArn" })
  calculatorArn: string;

  @SpeakeasyMetadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;
}
