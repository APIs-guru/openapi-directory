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
import { DataCatalogConfig } from "./datacatalogconfig";
import { S3StorageConfig } from "./s3storageconfig";
// OfflineStoreConfig
/**
 * <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
**/
var OfflineStoreConfig = /** @class */ (function (_super) {
    __extends(OfflineStoreConfig, _super);
    function OfflineStoreConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataCatalogConfig" }),
        __metadata("design:type", DataCatalogConfig)
    ], OfflineStoreConfig.prototype, "dataCatalogConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableGlueTableCreation" }),
        __metadata("design:type", Boolean)
    ], OfflineStoreConfig.prototype, "disableGlueTableCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3StorageConfig" }),
        __metadata("design:type", S3StorageConfig)
    ], OfflineStoreConfig.prototype, "s3StorageConfig", void 0);
    return OfflineStoreConfig;
}(SpeakeasyBase));
export { OfflineStoreConfig };
