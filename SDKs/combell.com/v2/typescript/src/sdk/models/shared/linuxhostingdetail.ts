import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinuxIpTypeEnum } from "./linuxiptypeenum";
import { LinuxSite } from "./linuxsite";



export class LinuxHostingDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ftp_enabled" })
  ftpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ftp_username" })
  ftpUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_type" })
  ipType?: LinuxIpTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=max_size" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=max_webspace_size" })
  maxWebspaceSize?: number;

  @SpeakeasyMetadata({ data: "json, name=mysql_database_names" })
  mysqlDatabaseNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=php_version" })
  phpVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: LinuxSite })
  sites?: LinuxSite[];

  @SpeakeasyMetadata({ data: "json, name=ssh_host" })
  sshHost?: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_username" })
  sshUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=webspace_usage" })
  webspaceUsage?: number;
}
