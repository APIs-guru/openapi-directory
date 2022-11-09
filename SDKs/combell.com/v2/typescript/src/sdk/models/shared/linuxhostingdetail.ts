import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinuxIpTypeEnum } from "./linuxiptypeenum";
import { LinuxSite } from "./linuxsite";


export class LinuxHostingDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=ftp_enabled" })
  ftpEnabled?: boolean;

  @Metadata({ data: "json, name=ftp_username" })
  ftpUsername?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=ip_type" })
  ipType?: LinuxIpTypeEnum;

  @Metadata({ data: "json, name=max_size" })
  maxSize?: number;

  @Metadata({ data: "json, name=max_webspace_size" })
  maxWebspaceSize?: number;

  @Metadata({ data: "json, name=mysql_database_names" })
  mysqlDatabaseNames?: string[];

  @Metadata({ data: "json, name=php_version" })
  phpVersion?: string;

  @Metadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;

  @Metadata({ data: "json, name=sites", elemType: shared.LinuxSite })
  sites?: LinuxSite[];

  @Metadata({ data: "json, name=ssh_host" })
  sshHost?: string;

  @Metadata({ data: "json, name=ssh_username" })
  sshUsername?: string;

  @Metadata({ data: "json, name=webspace_usage" })
  webspaceUsage?: number;
}
