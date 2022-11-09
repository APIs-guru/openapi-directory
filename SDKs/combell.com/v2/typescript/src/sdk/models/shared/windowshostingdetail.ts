import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationPool } from "./applicationpool";
import { WindowsIpTypeEnum } from "./windowsiptypeenum";
import { WindowsSite } from "./windowssite";


export class WindowsHostingDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @Metadata({ data: "json, name=application_pool" })
  applicationPool?: ApplicationPool;

  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=ftp_username" })
  ftpUsername?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=ip_type" })
  ipType?: WindowsIpTypeEnum;

  @Metadata({ data: "json, name=max_size" })
  maxSize?: number;

  @Metadata({ data: "json, name=mssql_database_names" })
  mssqlDatabaseNames?: string[];

  @Metadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;

  @Metadata({ data: "json, name=sites", elemType: shared.WindowsSite })
  sites?: WindowsSite[];
}
