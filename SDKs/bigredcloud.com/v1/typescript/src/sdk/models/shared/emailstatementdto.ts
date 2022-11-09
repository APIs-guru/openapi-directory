import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EmailStatementDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=bccAddresses" })
  bccAddresses?: string[];

  @Metadata({ data: "json, name=customerId" })
  customerId?: number;

  @Metadata({ data: "json, name=fromPeriod" })
  fromPeriod?: Date;

  @Metadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @Metadata({ data: "json, name=minimumBalance" })
  minimumBalance?: number;

  @Metadata({ data: "json, name=toAddress" })
  toAddress?: string;

  @Metadata({ data: "json, name=toPeriod" })
  toPeriod?: Date;
}
