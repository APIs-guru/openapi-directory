import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltinSlotTypeMetadata } from "./builtinslottypemetadata";


export class GetBuiltinSlotTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=slotTypes", elemType: shared.BuiltinSlotTypeMetadata })
  slotTypes?: BuiltinSlotTypeMetadata[];
}
