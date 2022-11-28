package shared

// UserEMailSettingSubscriptionLocalization
// Localized text relevant to a given EMail setting in a given localization. Extra settings specifically for subscriptions.
type UserEMailSettingSubscriptionLocalization struct {
	Description                 *string
	KnownUserActionText         *string
	RegisteredUserDescription   *string
	Title                       *string
	UnknownUserActionText       *string
	UnknownUserDescription      *string
	UnregisteredUserDescription *string
}
