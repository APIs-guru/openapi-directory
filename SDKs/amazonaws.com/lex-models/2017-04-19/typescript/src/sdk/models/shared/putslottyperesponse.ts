import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnumerationValue } from "./enumerationvalue";
import { SlotTypeConfiguration } from "./slottypeconfiguration";
import { SlotValueSelectionStrategyEnum } from "./slotvalueselectionstrategyenum";


export class PutSlotTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enumerationValues", elemType: shared.EnumerationValue })
  enumerationValues?: EnumerationValue[];

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @Metadata({ data: "json, name=slotTypeConfigurations", elemType: shared.SlotTypeConfiguration })
  slotTypeConfigurations?: SlotTypeConfiguration[];

  @Metadata({ data: "json, name=valueSelectionStrategy" })
  valueSelectionStrategy?: SlotValueSelectionStrategyEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
