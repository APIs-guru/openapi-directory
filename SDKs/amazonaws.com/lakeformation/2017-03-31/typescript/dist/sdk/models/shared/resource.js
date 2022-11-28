var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataLocationResource } from "./datalocationresource";
import { DatabaseResource } from "./databaseresource";
import { LfTagKeyResource } from "./lftagkeyresource";
import { LfTagPolicyResource } from "./lftagpolicyresource";
import { TableResource } from "./tableresource";
import { TableWithColumnsResource } from "./tablewithcolumnsresource";
// Resource
/**
 * A structure for the resource.
**/
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Catalog" }),
        __metadata("design:type", Map)
    ], Resource.prototype, "catalog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataLocation" }),
        __metadata("design:type", DataLocationResource)
    ], Resource.prototype, "dataLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Database" }),
        __metadata("design:type", DatabaseResource)
    ], Resource.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LFTag" }),
        __metadata("design:type", LfTagKeyResource)
    ], Resource.prototype, "lfTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LFTagPolicy" }),
        __metadata("design:type", LfTagPolicyResource)
    ], Resource.prototype, "lfTagPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Table" }),
        __metadata("design:type", TableResource)
    ], Resource.prototype, "table", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableWithColumns" }),
        __metadata("design:type", TableWithColumnsResource)
    ], Resource.prototype, "tableWithColumns", void 0);
    return Resource;
}(SpeakeasyBase));
export { Resource };
