import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserDefinedFunctionResource } from "./userdefinedfunctionresource";


export class ViewDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=useExplicitColumnNames" })
  useExplicitColumnNames?: boolean;

  @Metadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;

  @Metadata({ data: "json, name=userDefinedFunctionResources", elemType: shared.UserDefinedFunctionResource })
  userDefinedFunctionResources?: UserDefinedFunctionResource[];
}
