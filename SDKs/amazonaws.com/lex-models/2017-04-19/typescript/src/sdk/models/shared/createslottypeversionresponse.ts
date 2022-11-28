import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnumerationValue } from "./enumerationvalue";
import { SlotTypeConfiguration } from "./slottypeconfiguration";
import { SlotValueSelectionStrategyEnum } from "./slotvalueselectionstrategyenum";



export class CreateSlotTypeVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enumerationValues", elemType: EnumerationValue })
  enumerationValues?: EnumerationValue[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeConfigurations", elemType: SlotTypeConfiguration })
  slotTypeConfigurations?: SlotTypeConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=valueSelectionStrategy" })
  valueSelectionStrategy?: SlotValueSelectionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
