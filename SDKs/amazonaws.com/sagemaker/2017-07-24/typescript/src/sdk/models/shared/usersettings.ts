import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JupyterServerAppSettings } from "./jupyterserverappsettings";
import { KernelGatewayAppSettings } from "./kernelgatewayappsettings";
import { SharingSettings } from "./sharingsettings";
import { TensorBoardAppSettings } from "./tensorboardappsettings";


// UserSettings
/** 
 * <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called.</p> <p> <code>SecurityGroups</code> is aggregated when specified in both calls. For all other settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code> take precedence over those specified in <code>CreateDomain</code>.</p>
**/
export class UserSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionRole" })
  executionRole?: string;

  @Metadata({ data: "json, name=JupyterServerAppSettings" })
  jupyterServerAppSettings?: JupyterServerAppSettings;

  @Metadata({ data: "json, name=KernelGatewayAppSettings" })
  kernelGatewayAppSettings?: KernelGatewayAppSettings;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=SharingSettings" })
  sharingSettings?: SharingSettings;

  @Metadata({ data: "json, name=TensorBoardAppSettings" })
  tensorBoardAppSettings?: TensorBoardAppSettings;
}
