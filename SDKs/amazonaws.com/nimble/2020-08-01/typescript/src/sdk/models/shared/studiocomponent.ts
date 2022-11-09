import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudioComponentConfiguration } from "./studiocomponentconfiguration";
import { StudioComponentInitializationScript } from "./studiocomponentinitializationscript";
import { ScriptParameterKeyValue } from "./scriptparameterkeyvalue";
import { StudioComponentStateEnum } from "./studiocomponentstateenum";
import { StudioComponentStatusCodeEnum } from "./studiocomponentstatuscodeenum";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";


// StudioComponent
/** 
 * A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.
**/
export class StudioComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: StudioComponentConfiguration;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ec2SecurityGroupIds" })
  ec2SecurityGroupIds?: string[];

  @Metadata({ data: "json, name=initializationScripts", elemType: shared.StudioComponentInitializationScript })
  initializationScripts?: StudioComponentInitializationScript[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scriptParameters", elemType: shared.ScriptParameterKeyValue })
  scriptParameters?: ScriptParameterKeyValue[];

  @Metadata({ data: "json, name=state" })
  state?: StudioComponentStateEnum;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: StudioComponentStatusCodeEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @Metadata({ data: "json, name=subtype" })
  subtype?: StudioComponentSubtypeEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: StudioComponentTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
