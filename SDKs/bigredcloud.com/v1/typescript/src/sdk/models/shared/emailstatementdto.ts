import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmailStatementDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bccAddresses" })
  bccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: number;

  @SpeakeasyMetadata({ data: "json, name=fromPeriod" })
  fromPeriod?: Date;

  @SpeakeasyMetadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumBalance" })
  minimumBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=toAddress" })
  toAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=toPeriod" })
  toPeriod?: Date;
}
