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
import { LinuxIpTypeEnum } from "./linuxiptypeenum";
import { LinuxSite } from "./linuxsite";
var LinuxHostingDetail = /** @class */ (function (_super) {
    __extends(LinuxHostingDetail, _super);
    function LinuxHostingDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actual_size" }),
        __metadata("design:type", Number)
    ], LinuxHostingDetail.prototype, "actualSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_name" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ftp_enabled" }),
        __metadata("design:type", Boolean)
    ], LinuxHostingDetail.prototype, "ftpEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ftp_username" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "ftpUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_type" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "ipType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_size" }),
        __metadata("design:type", Number)
    ], LinuxHostingDetail.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_webspace_size" }),
        __metadata("design:type", Number)
    ], LinuxHostingDetail.prototype, "maxWebspaceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysql_database_names" }),
        __metadata("design:type", Array)
    ], LinuxHostingDetail.prototype, "mysqlDatabaseNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=php_version" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "phpVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicepack_id" }),
        __metadata("design:type", Number)
    ], LinuxHostingDetail.prototype, "servicepackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sites", elemType: LinuxSite }),
        __metadata("design:type", Array)
    ], LinuxHostingDetail.prototype, "sites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_host" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "sshHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_username" }),
        __metadata("design:type", String)
    ], LinuxHostingDetail.prototype, "sshUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webspace_usage" }),
        __metadata("design:type", Number)
    ], LinuxHostingDetail.prototype, "webspaceUsage", void 0);
    return LinuxHostingDetail;
}(SpeakeasyBase));
export { LinuxHostingDetail };
