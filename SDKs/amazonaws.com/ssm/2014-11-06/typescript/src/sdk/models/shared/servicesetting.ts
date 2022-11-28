import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceSetting
/** 
 * <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p>
**/
export class ServiceSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedUser" })
  lastModifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=SettingId" })
  settingId?: string;

  @SpeakeasyMetadata({ data: "json, name=SettingValue" })
  settingValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
