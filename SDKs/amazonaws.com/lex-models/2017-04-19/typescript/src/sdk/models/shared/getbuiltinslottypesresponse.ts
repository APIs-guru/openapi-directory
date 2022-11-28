import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltinSlotTypeMetadata } from "./builtinslottypemetadata";



export class GetBuiltinSlotTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypes", elemType: BuiltinSlotTypeMetadata })
  slotTypes?: BuiltinSlotTypeMetadata[];
}
