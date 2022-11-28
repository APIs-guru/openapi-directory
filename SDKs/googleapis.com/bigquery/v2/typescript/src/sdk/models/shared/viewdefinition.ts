import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunctionResource } from "./userdefinedfunctionresource";



export class ViewDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=useExplicitColumnNames" })
  useExplicitColumnNames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userDefinedFunctionResources", elemType: UserDefinedFunctionResource })
  userDefinedFunctionResources?: UserDefinedFunctionResource[];
}
