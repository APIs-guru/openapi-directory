import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Breadcrumb } from "./breadcrumb";
import { Item } from "./item";
import { Item } from "./item";
import { Item } from "./item";
import { Item } from "./item";
import { Item } from "./item";


export class MessageOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application?: string;

  @Metadata({ data: "json, name=breadcrumbs", elemType: shared.Breadcrumb })
  breadcrumbs?: Breadcrumb[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=cookies", elemType: shared.Item })
  cookies?: Item[];

  @Metadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @Metadata({ data: "json, name=data", elemType: shared.Item })
  data?: Item[];

  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=form", elemType: shared.Item })
  form?: Item[];

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=queryString", elemType: shared.Item })
  queryString?: Item[];

  @Metadata({ data: "json, name=serverVariables", elemType: shared.Item })
  serverVariables?: Item[];

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleTemplate" })
  titleTemplate?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
